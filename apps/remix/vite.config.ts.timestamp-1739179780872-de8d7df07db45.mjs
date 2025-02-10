// vite.config.ts
import { vitePlugin as remix } from "file:///Users/otaprokopec/programming/date/node_modules/.pnpm/@remix-run+dev@2.15.3_@remix-run+react@2.15.3_react-dom@19.0.0_react@19.0.0__react@19.0.0_typ_pxcsynrq5bse35epowwp63h4ba/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Users/otaprokopec/programming/date/node_modules/.pnpm/vite@5.4.14_@types+node@22.13.1_lightningcss@1.29.1_terser@5.38.0/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/otaprokopec/programming/date/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.7.3_vite@5.4.14_@types+node@22.13.1_lightningcss@1.29.1_terser@5.38.0_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  envDir: "../../",
  envPrefix: "NEXT_PUBLIC_",
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths({})
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb3RhcHJva29wZWMvcHJvZ3JhbW1pbmcvZGF0ZS9hcHBzL3JlbWl4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvb3RhcHJva29wZWMvcHJvZ3JhbW1pbmcvZGF0ZS9hcHBzL3JlbWl4L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vdGFwcm9rb3BlYy9wcm9ncmFtbWluZy9kYXRlL2FwcHMvcmVtaXgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSAnQHJlbWl4LXJ1bi9kZXYnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcblxuZGVjbGFyZSBtb2R1bGUgJ0ByZW1peC1ydW4vbm9kZScge1xuICBpbnRlcmZhY2UgRnV0dXJlIHtcbiAgICB2M19zaW5nbGVGZXRjaDogdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnZEaXI6ICcuLi8uLi8nLFxuICBlbnZQcmVmaXg6ICdORVhUX1BVQkxJQ18nLFxuICBwbHVnaW5zOiBbXG4gICAgcmVtaXgoe1xuICAgICAgc3NyOiBmYWxzZSxcbiAgICAgIGZ1dHVyZToge1xuICAgICAgICB2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG4gICAgICAgIHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXG4gICAgICAgIHYzX3NpbmdsZUZldGNoOiB0cnVlLFxuICAgICAgICB2M19sYXp5Um91dGVEaXNjb3Zlcnk6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoe30pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsY0FBYyxhQUFhO0FBQ2hXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBUTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLFFBQ3JCLGdCQUFnQjtBQUFBLFFBQ2hCLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjLENBQUMsQ0FBQztBQUFBLEVBQ2xCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
