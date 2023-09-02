import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: "e5v2ku2g",
    dataset: "production",
    title: "AYG3 Learning sanity",
    apiVersion: "2023-08-30",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
})

export default config;