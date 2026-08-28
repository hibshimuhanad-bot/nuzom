import aldalyelLogo from "@/assets/aldalyel-logo.png";
import crmLogoAsset from "@/assets/crm-logo.png.asset.json";
import samaaPlusLogoAsset from "@/assets/samaa-plus-logo.png.asset.json";
import zerisksLogoAsset from "@/assets/zerisks-logo.png.asset.json";
import nexdoLogoAsset from "@/assets/nexdo-logo.png.asset.json";
import meeadiLogoAsset from "@/assets/meeadi-logo.png.asset.json";
import visitorpathLogoAsset from "@/assets/visitorpath-logo.png.asset.json";

export const logoMap: Record<string, string> = {
  aldalyel: aldalyelLogo,
  crm: crmLogoAsset.url,
  "samaa-plus": samaaPlusLogoAsset.url,
  zerisks: zerisksLogoAsset.url,
  nexdo: nexdoLogoAsset.url,
  meeadi: meeadiLogoAsset.url,
  "visitor-path": visitorpathLogoAsset.url,
};
