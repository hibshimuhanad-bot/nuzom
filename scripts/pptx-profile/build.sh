#!/usr/bin/env bash
set -euo pipefail

ROOT="/tmp/pptx2"
IMG="$ROOT/img"
OUT="$ROOT"
DELIVER="/mnt/documents/nzom-labs-company-profile"
PROJECT_ROOT="/dev-server"

mkdir -p "$IMG" "$DELIVER"

# --- fonts ---
FONT_DIR="$ROOT/fonts"
mkdir -p "$FONT_DIR"
if [ ! -f "$FONT_DIR/Tajawal-Regular.ttf" ]; then
  echo "Downloading Tajawal font..."
  curl -L -o "$FONT_DIR/Tajawal-Regular.ttf" "https://github.com/google/fonts/raw/main/ofl/tajawal/Tajawal-Regular.ttf"
  curl -L -o "$FONT_DIR/Tajawal-Bold.ttf" "https://github.com/google/fonts/raw/main/ofl/tajawal/Tajawal-Bold.ttf"
fi
# register with fontconfig for LibreOffice
mkdir -p "$HOME/.config/fontconfig"
cat > "$HOME/.config/fontconfig/fonts.conf" <<'EOF'
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>FONT_DIR</dir>
</fontconfig>
EOF
sed -i "s|FONT_DIR|$FONT_DIR|g" "$HOME/.config/fontconfig/fonts.conf"
fc-cache -f "$FONT_DIR" >/dev/null 2>&1 || true

# --- node deps ---
if [ ! -d "$ROOT/node_modules" ]; then
  echo "Installing pptxgenjs..."
  cd "$ROOT" && npm init -y >/dev/null && npm install pptxgenjs@3.12.0 >/dev/null
fi

# --- resolve assets ---
cp "$PROJECT_ROOT/src/assets/logo.png" "$IMG/logo.png"
cp "$PROJECT_ROOT/src/assets/aldalyel-logo.png" "$IMG/aldalyel-logo.png"

resolve_asset() {
  local asset_json="$1"
  local slug="$2"
  local kind="$3"
  if [ -f "$asset_json" ]; then
    local url
    url=$(python3 -c "import json,sys; print(json.load(sys.stdin)['url'])" < "$asset_json")
    local ext
    ext=$(python3 -c "import json,sys; print(json.load(sys.stdin)['content_type'].split('/')[-1])" < "$asset_json")
    local tmp="$IMG/${slug}-${kind}.${ext}"
    echo "Downloading $slug $kind from $url"
    curl -sfL "http://localhost:8080$url" -o "$tmp"
    if [ "$ext" = "webp" ]; then
      cwebp -quiet "$tmp" -o "$IMG/${slug}-${kind}.png"
      rm "$tmp"
    fi
  fi
}

resolve_asset "$PROJECT_ROOT/src/assets/zerisks-logo.png.asset.json" zerisks logo
resolve_asset "$PROJECT_ROOT/src/assets/zerisks-preview.png.asset.json" zerisks preview
resolve_asset "$PROJECT_ROOT/src/assets/crm-logo.png.asset.json" crm logo
resolve_asset "$PROJECT_ROOT/src/assets/crm-preview.png.asset.json" crm preview
resolve_asset "$PROJECT_ROOT/src/assets/nexdo-logo.png.asset.json" nexdo logo
resolve_asset "$PROJECT_ROOT/src/assets/nexdo-preview.png.asset.json" nexdo preview
resolve_asset "$PROJECT_ROOT/src/assets/meeadi-logo.png.asset.json" meeadi logo
resolve_asset "$PROJECT_ROOT/src/assets/meeadi-preview.png.asset.json" meeadi preview
resolve_asset "$PROJECT_ROOT/src/assets/samaa-plus-logo.png.asset.json" samaa-plus logo
resolve_asset "$PROJECT_ROOT/src/assets/samaa-plus-preview.png.asset.json" samaa-plus preview
resolve_asset "$PROJECT_ROOT/src/assets/visitorpath-logo.png.asset.json" visitor-path logo
resolve_asset "$PROJECT_ROOT/src/assets/visitorpath-preview.png.asset.json" visitor-path preview

# --- generate pptx ---
cd "$ROOT"
export PPTX_IMG_DIR="$IMG"
export PPTX_OUT="$OUT/nzom-labs-company-profile.pptx"
node "$PROJECT_ROOT/scripts/pptx-profile/generate.mjs"

# --- convert to pdf ---
echo "Converting to PDF..."
cp /tmp/knowledge/skill/pptx/scripts/office/run_libreoffice.py /tmp/run_libreoffice.py
python3 /tmp/run_libreoffice.py --headless --convert-to pdf "$OUT/nzom-labs-company-profile.pptx"

# --- deliver ---
cp "$OUT/nzom-labs-company-profile.pptx" "$DELIVER/"
cp "$OUT/nzom-labs-company-profile.pdf" "$DELIVER/"

echo "Deliverables:"
ls -la "$DELIVER"
