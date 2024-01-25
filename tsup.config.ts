import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["./lib/index.ts"],
  format: ["cjs"],
  clean: true,
  dts: true,
});
