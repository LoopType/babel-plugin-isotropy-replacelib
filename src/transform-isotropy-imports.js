import analyzeImportDeclaration from "../../isotropy-ast-analyzer-replacelib";
import template from "babel-template";

export default function(opts) {
  return {
    plugin: {
      visitor: {
        ImportDeclaration: {
          exit(path, state) {
            const analysis = analyzeImportDeclaration(path, state);
            if (analysis) {
              const regex = new RegExp(
                `['"]${analysis.importReplacement.from}['"]`
              );
              const out = analysis.code.replace(
                regex,
                `"${analysis.importReplacement.to}"`
              );

              path.replaceWith(template(out, { sourceType: "module" })());
              path.skip();
            }
          }
        }
      }
    }
  };
}
