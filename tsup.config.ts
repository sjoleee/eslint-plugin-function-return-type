import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["./lib/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
});
