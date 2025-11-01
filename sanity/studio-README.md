Sanity Studio
-----------------

This repo includes Sanity schema definitions under `sanity/schemas/`.

To run the Studio locally:

1. Install the Sanity CLI globally (or use npx):

```powershell
npm i -g @sanity/cli
# or
npx sanity init
```

2. Create or configure your Sanity project and set `SANITY_PROJECT_ID`.

3. Start the studio from a working directory where `sanity.json` is configured:

```powershell
npx sanity start
```

4. Import data via `sanity dataset import your-export.tar.gz production --replace` when you have the dataset.

Notes:
- The schemas in `sanity/schemas/` are ready to be used by the studio. Replace the placeholder `projectId` in `sanity.json`.
