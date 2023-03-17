import { State } from "./utils/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: { state: State };
  }
}
