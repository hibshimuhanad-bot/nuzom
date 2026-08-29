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

PREVIEW_URL="https://id-preview--746419f1-72ce-4d66-b0ae-69ec912477c7.lovable.app"

resolve_asset() {
  local asset_json="$1"
  local slug="$2"
  local kind="$3"
  if [ -f "$asset_json" ]; then
    local url
    url=$(python3 -c "import json,sys; print(json.load(sys.stdin)['url'])" < "$asset_json")
    local tmp="$IMG/${slug}-${kind}.tmp"
    echo "Downloading $slug $kind from $url"
    curl -sfL "$PREVIEW_URL$url" -o "$tmp"
    local real
    real=$(file -b --mime-type "$tmp" | cut -d/ -f2)
    if [ "$real" = "webp" ]; then
      cwebp -quiet "$tmp" -o "$IMG/${slug}-${kind}.png"
      rm "$tmp"
    else
      mv "$tmp" "$IMG/${slug}-${kind}.${real}"
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
export PPTX_IMG_DIR="$IMG"
export PPTX_OUT="$OUT/nzom-labs-company-profile.pptx"
cp "$PROJECT_ROOT/scripts/pptx-profile/generate.mjs" "$ROOT/generate.mjs"
cd "$ROOT" && node generate.mjs

# --- convert to pdf ---
echo "Converting to PDF..."
cp /tmp/knowledge/skill/pptx/scripts/office/run_libreoffice.py /tmp/run_libreoffice.py
python3 /tmp/run_libreoffice.py --headless --convert-to pdf "$OUT/nzom-labs-company-profile.pptx"

# --- deliver ---
cp "$OUT/nzom-labs-company-profile.pptx" "$DELIVER/"
cp "$OUT/nzom-labs-company-profile.pdf" "$DELIVER/"

echo "Deliverables:"
ls -la "$DELIVER"
