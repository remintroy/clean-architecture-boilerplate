/* eslint-disable @typescript-eslint/no-explicit-any */
import GetUtils from "./adaptor/utils";
import getConfig from "./config";

(global as any).utils = new GetUtils();
(global as any).config = getConfig();
