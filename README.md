Isotropy Babel Plugin for translating imports
=============================================
This module is a babel plugin that translates local devlopment imports into
server-deployable imports.
It uses isotropy-ast-analyzer-replacelib for AST analysis.

This is part of the isotropy framework (www.isotropy.org).

Include the plugin in .babelrc file.

Plugin configuration:
```
plugins: [
  [
    "transform-isotropy-imports",
    {
      projects: [
        {
          dir: "dist/test",
          modules: [
            {
              source: "fixtures/my-db",
              imports: [
                { from: "auth-plug", to: "server-auth-plug" }
              ]
            }
          ]
        }
      ]
    }
  ]
]
```
projects:  
dir: Specify the root of the project.  
modules:  
source: Points to the local db file.  
imports:  
from: Local development mode import name  
to: Server-deployable mode import name
