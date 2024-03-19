import { IsNumber, IsString } from "class-validator";

export default class ChannelPayload implements BodyRequest {
  @IsNumber()
  id?: number;
  @IsString()
  name: string;
  @IsString()
  type: "pos" | "marketplace" | "storefront" | "marketing";
  @IsString()
  platform: string;
  @IsString()
  status:
    | "active"
    | "prelaunch"
    | "inactive"
    | "connected"
    | "disconnected"
    | "archived";
  @IsBoolean()
  is_listable_from_ui: boolean;
  @IsBoolean()
  is_visible: boolean;
  @IsBoolean()
  is_enabled?: boolean;
  config_meta?: {
    app: ChannelConfigMeta
  };
}

