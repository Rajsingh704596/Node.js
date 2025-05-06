//!  npm -
//# It is a popular package manager which comes builded with Node.js
//# It is a CLI tool used to install, update, and remove external packages.
//# npm doesn't have any official full form ,"npm is not acronym".


// Here are some **useful and important** `npm` (Node Package Manager) commands that every developer working with Node.js should know:

// ### 1. **`npm init`**
//    - **Purpose**: Initializes a new Node.js project by creating a `package.json` file.
//    - **Usage**: 
//      ```bash
//      npm init
//      ```
//    - **Alternative**: `npm init -y` (automatically accepts default values).

// ### 2. **`npm install` or `npm i`**
//    - **Purpose**: Installs dependencies listed in `package.json`.
//    - **Usage**:
//      ```bash
//      npm install
//      ```
//    - **Install a specific package**:
//      ```bash
//      npm install <package-name>
//      ```
//    - **Install a package globally**:
//      ```bash
//      npm install -g <package-name>
//      ```

// ### 3. **`npm install <package-name> --save-dev`**
//    - **Purpose**: Installs a package as a development dependency (added to `devDependencies` in `package.json`).
//    - **Usage**:
//      ```bash
//      npm install <package-name> --save-dev
//      ```

// ### 4. **`npm update`**
//    - **Purpose**: Updates all the packages to the latest version according to the version range specified in `package.json`.
//    - **Usage**:
//      ```bash
//      npm update
//      ```

// ### 5. **`npm uninstall <package-name>`**
//    - **Purpose**: Uninstalls a package and removes it from `package.json`.
//    - **Usage**:
//      ```bash
//      npm uninstall <package-name>
//      ```

// ### 6. **`npm list`**
//    - **Purpose**: Lists all installed packages in the current project.
//    - **Usage**:
//      ```bash
//      npm list
//      ```
//    - **To see globally installed packages**:
//      ```bash
//      npm list -g
//      ```

// ### 7. **`npm run <script>`**
//    - **Purpose**: Runs custom scripts defined in the `scripts` section of `package.json`.
//    - **Usage**:
//      ```bash
//      npm run <script-name>
//      ```
//    - Example: If you have `"start": "node app.js"` in your `package.json`, you can run:
//      ```bash
//      npm run start
//      ```

// ### 8. **`npm audit`**
//    - **Purpose**: Scans your project for vulnerabilities in installed dependencies.
//    - **Usage**:
//      ```bash
//      npm audit
//      ```

// ### 9. **`npm audit fix`**
//    - **Purpose**: Automatically fixes vulnerabilities in dependencies.
//    - **Usage**:
//      ```bash
//      npm audit fix
//      ```

// ### 10. **`npm outdated`**
//    - **Purpose**: Lists the outdated packages in your project, showing the current, wanted, and latest versions.
//    - **Usage**:
//      ```bash
//      npm outdated
//      ```

// ### 11. **`npm cache clean --force`**
//    - **Purpose**: Clears the npm cache, which may help solve installation issues.
//    - **Usage**:
//      ```bash
//      npm cache clean --force
//      ```

// ### 12. **`npm version <update-type>`**
//    - **Purpose**: Updates the version number in `package.json`. You can use `major`, `minor`, or `patch` to update according to Semantic Versioning.
//    - **Usage**:
//      ```bash
//      npm version patch
//      ```
//      This will increment the patch version in `package.json`.

// ### 13. **`npm publish`**
//    - **Purpose**: Publishes a package to the npm registry (for use by others).
//    - **Usage**:
//      ```bash
//      npm publish
//      ```

// ### 14. **`npm uninstall <package-name> -g`**
//    - **Purpose**: Uninstalls a globally installed package.
//    - **Usage**:
//      ```bash
//      npm uninstall -g <package-name>
//      ```

// ### 15. **`npm help <command>`**
//    - **Purpose**: Provides detailed information about any npm command.
//    - **Usage**:
//      ```bash
//      npm help <command>
//      ```

// ### 16. **`npm init <scope>`**
//    - **Purpose**: Initialize a scoped package (useful for private packages).
//    - **Usage**:
//      ```bash
//      npm init @<scope>
//      ```

// ### 17. **`npm ci`**
//    - **Purpose**: Clean install. This is faster than `npm install` and it’s ideal for CI/CD environments.
//    - **Usage**:
//      ```bash
//      npm ci
//      ```

// ### 18. **`npm link`**
//    - **Purpose**: Links a package to the global `node_modules` directory and makes it available for local use (useful for local development of packages).
//    - **Usage**:
//      ```bash
//      npm link <package-name>
//      ```

// ### 19. **`npm prune`**
//    - **Purpose**: Removes extraneous packages that are no longer needed or are listed in `node_modules`.
//    - **Usage**:
//      ```bash
//      npm prune
//      ```

// ### 20. **`npm ls <package-name>`**
//    - **Purpose**: Checks if a specific package is installed in the current project.
//    - **Usage**:
//      ```bash
//      npm ls <package-name>
//      ```

// These commands cover the most essential operations you'll perform with npm to manage dependencies, maintain packages, and ensure your Node.js project runs smoothly.


//$ Notes-

//npm list                                              o/p- in terminal  (all install package name show)
//npm list -a                                           o/p- all install package and inside package all files show
//npm view <package-name>      //e.g- npm view express   o/p- express package k sari package.json property show 
//npm view <package-name> <package.json-property>       //e.g.- npm view express version         //o/p-express version show
//npm view <package-name> versions                      //e.g- npm view express versions   //o/p- express all versions show


//! Semantic Versioning System (1.0.0- MajorVersion.MinorVer.PatchVer) -  Most of the npm packages use Semantic Versioning System or SemVer. Note: Some packages like typescript, react-native don’t follow it. 
//^install particular package version--          //npm install express@latest   -latest express version install

//npm install <package-name>@<version>
//e.g.- 
    //      npm install express@4.0.0            //@   ^4.0.0 version install (minor or patch update include means 4.2.2  but not install 5.0.0 , b/c Caret sign) 
    //      npm install express@4.0.0--save-exact   //@  To install exact version
    //      npm install express@~4.0.0           //@ ~4.0.0 install patch update only means 4.0.2 allow but not install 4.2.2 , b/c Tilde sign
    //      npm install express@4.2.x            //@ means 4.2.1 allow but not allowed 4.3.0

//todo- Note ^4.17.1 is equivalent to 4.x and ~4.17.1 is equivalent to 4.17.xnp

//npm outdated               //@ it's show outdated package in our project (show all 3 points- current, wanted, latest)
                             //@ Current- The version of the package currently installed in our project.
                             //@ Wanted- the latest version that satisfies the version range defined in our package.json, it basically uses the symbols to get it.
                             //@ Latest- Absolute latest version of the package.

//npm remove <package-name>   //@ Remove that package from package.json

//npm update              //@ this update all the packages in our project. but it follows the range defined in package.json. it doesn't update to absolute latest version.    // Note - but package.json it's not show

//npx npm-check-updates  //@npx is CLI tool that comes with npm , it is used to execute a package without requiring you to install globally or locally. it is useful for temporary usage of a package.
                        //@ npm-check-updates is a package which we can use to upgrade our package to absolute latest versions. (but not show in package.json only show in package-lock.json)
//npx npm-check-updates -u       //@ -u flag at the end to update the package.json after reviewing   (now package.json also show latest version)

//^ now Run npm install to install new version.


//# Global package with npm-                            
//npm install -g npm-check-updates                           //@ installing packages globally (system m install package.json m show nhi ho ga)
     //@ now we can try npm-check-update command directly in any project without using npx. , npm-check-updates also have an alias named ncu.

//^ Fun fact- npm is itself a global package which means if we need to update npm. we will do:     npm install -g npm     

//npm outdated -g                      //@ to see outdated global packages.
//npm updated -g <package-name>
//npm remove -g <package-name>


//# Development dependency in package.json- 
//@ Dev. dependency are the packages that aren't needed for functioning of our project in production (only development time use). this can be formatting, linting, testing and so on.
// npm install -D eslint        //@ this will install eslint as a development dependency (inside package.json named devDependencies/eslint)

//* if we use:  npm install --production  , those package(dev.dep.) won't be installed. but they will be installed if we don't use production flag


//# package-lock.json - node_modules all third party package exact version manage and nested dependencies detailed record store. (In short - project ki exact dependency versions ko lock karne k liye hota hai)
//# package.json - here proj . related dev dependencies, scripts and Meta data store (In short- ye project ka overall blue print hai)

