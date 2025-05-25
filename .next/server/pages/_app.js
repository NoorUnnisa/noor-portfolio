"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        path: \"/\"\n    },\n    {\n        name: \"About\",\n        path: \"/about\"\n    },\n    {\n        name: \"Contact\",\n        path: \"/contact\"\n    },\n    {\n        name: \"Resume\",\n        path: \"/resume\"\n    },\n    {\n        name: \"Skills\",\n        path: \"/skills\"\n    },\n    {\n        name: \"Projects\",\n        path: \"/projects\"\n    },\n    {\n        name: \"Experience\",\n        path: \"/experience\"\n    },\n    {\n        name: \"Education\",\n        path: \"/education\"\n    },\n    {\n        name: \"Blog\",\n        path: \"/blog\"\n    }\n];\nfunction Navbar() {\n    const { colorMode, toggleColorMode } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        bg: colorMode === \"dark\" ? \"black\" : \"white\",\n        px: 4,\n        shadow: \"md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            h: 16,\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n                    spacing: 8,\n                    alignItems: \"center\",\n                    children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                            href: link.path,\n                            px: 2,\n                            py: 1,\n                            rounded: \"md\",\n                            _hover: {\n                                textDecoration: \"none\",\n                                bg: colorMode === \"dark\" ? \"gray.700\" : \"gray.200\"\n                            },\n                            fontWeight: \"medium\",\n                            children: link.name\n                        }, link.name, false, {\n                            fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                    size: \"md\",\n                    \"aria-label\": \"Toggle color mode\",\n                    onClick: toggleColorMode,\n                    icon: colorMode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 40\n                    }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 54\n                    }, void 0)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\components\\\\Navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9GO0FBQ3BEO0FBQ29CO0FBRXBELE1BQU1TLFFBQVE7SUFDWjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07SUFBSTtJQUMxQjtRQUFFRCxNQUFNO1FBQVNDLE1BQU07SUFBUztJQUNoQztRQUFFRCxNQUFNO1FBQVdDLE1BQU07SUFBVztJQUNwQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVlDLE1BQU07SUFBWTtJQUN0QztRQUFFRCxNQUFNO1FBQWNDLE1BQU07SUFBYztJQUMxQztRQUFFRCxNQUFNO1FBQWFDLE1BQU07SUFBYTtJQUN4QztRQUFFRCxNQUFNO1FBQVFDLE1BQU07SUFBUTtDQUMvQjtBQUVjLFNBQVNDO0lBQ3RCLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUUsR0FBR1QsOERBQVlBO0lBQ25ELHFCQUNFLDhEQUFDTCxpREFBR0E7UUFBQ2UsSUFBSUYsY0FBYyxTQUFTLFVBQVU7UUFBU0csSUFBSTtRQUFHQyxRQUFPO2tCQUMvRCw0RUFBQ2hCLGtEQUFJQTtZQUFDaUIsR0FBRztZQUFJQyxZQUFXO1lBQVNDLGdCQUFlOzs4QkFDOUMsOERBQUNsQixvREFBTUE7b0JBQUNtQixTQUFTO29CQUFHRixZQUFXOzhCQUM1QlYsTUFBTWEsR0FBRyxDQUFDQyxDQUFBQSxxQkFDVCw4REFBQ3BCLGtEQUFJQTs0QkFDSHFCLElBQUlsQixrREFBUUE7NEJBRVptQixNQUFNRixLQUFLWixJQUFJOzRCQUNmSyxJQUFJOzRCQUNKVSxJQUFJOzRCQUNKQyxTQUFROzRCQUNSQyxRQUFRO2dDQUFFQyxnQkFBZ0I7Z0NBQVFkLElBQUlGLGNBQWMsU0FBUyxhQUFhOzRCQUFXOzRCQUNyRmlCLFlBQVc7c0NBRVZQLEtBQUtiLElBQUk7MkJBUkxhLEtBQUtiLElBQUk7Ozs7Ozs7Ozs7OEJBWXBCLDhEQUFDTix3REFBVUE7b0JBQ1QyQixNQUFLO29CQUNMQyxjQUFXO29CQUNYQyxTQUFTbkI7b0JBQ1RvQixNQUFNckIsY0FBYyx1QkFBUyw4REFBQ0wscURBQU9BOzs7OytDQUFNLDhEQUFDRCxzREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RCIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3ItcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD85YTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgSFN0YWNrLCBMaW5rLCBJY29uQnV0dG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE1vb25JY29uLCBTdW5JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbmFtZTogJ0hvbWUnLCBwYXRoOiAnLycgfSxcbiAgeyBuYW1lOiAnQWJvdXQnLCBwYXRoOiAnL2Fib3V0JyB9LFxuICB7IG5hbWU6ICdDb250YWN0JywgcGF0aDogJy9jb250YWN0JyB9LFxuICB7IG5hbWU6ICdSZXN1bWUnLCBwYXRoOiAnL3Jlc3VtZScgfSxcbiAgeyBuYW1lOiAnU2tpbGxzJywgcGF0aDogJy9za2lsbHMnIH0sXG4gIHsgbmFtZTogJ1Byb2plY3RzJywgcGF0aDogJy9wcm9qZWN0cycgfSxcbiAgeyBuYW1lOiAnRXhwZXJpZW5jZScsIHBhdGg6ICcvZXhwZXJpZW5jZScgfSxcbiAgeyBuYW1lOiAnRWR1Y2F0aW9uJywgcGF0aDogJy9lZHVjYXRpb24nIH0sXG4gIHsgbmFtZTogJ0Jsb2cnLCBwYXRoOiAnL2Jsb2cnIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgcmV0dXJuIChcbiAgICA8Qm94IGJnPXtjb2xvck1vZGUgPT09ICdkYXJrJyA/ICdibGFjaycgOiAnd2hpdGUnfSBweD17NH0gc2hhZG93PVwibWRcIj5cbiAgICAgIDxGbGV4IGg9ezE2fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17OH0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIHtsaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcz17TmV4dExpbmt9XG4gICAgICAgICAgICAgIGtleT17bGluay5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtsaW5rLnBhdGh9XG4gICAgICAgICAgICAgIHB4PXsyfVxuICAgICAgICAgICAgICBweT17MX1cbiAgICAgICAgICAgICAgcm91bmRlZD1cIm1kXCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGJnOiBjb2xvck1vZGUgPT09ICdkYXJrJyA/ICdncmF5LjcwMCcgOiAnZ3JheS4yMDAnIH19XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgY29sb3IgbW9kZVwiXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgIGljb249e2NvbG9yTW9kZSA9PT0gJ2RhcmsnID8gPFN1bkljb24gLz4gOiA8TW9vbkljb24gLz59XG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsiQm94IiwiRmxleCIsIkhTdGFjayIsIkxpbmsiLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwiTmV4dExpbmsiLCJNb29uSWNvbiIsIlN1bkljb24iLCJsaW5rcyIsIm5hbWUiLCJwYXRoIiwiTmF2YmFyIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwiYmciLCJweCIsInNoYWRvdyIsImgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJzcGFjaW5nIiwibWFwIiwibGluayIsImFzIiwiaHJlZiIsInB5Iiwicm91bmRlZCIsIl9ob3ZlciIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCIsInNpemUiLCJhcmlhLWxhYmVsIiwib25DbGljayIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _theme__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _theme__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {\n                initialColorMode: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].config.initialColorMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\moizn\\\\source\\\\repos\\\\AI\\\\noor-portfolio\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUV0QztBQUNhO0FBRXpDLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNOLDREQUFjQTtRQUFDRSxPQUFPQSw4Q0FBS0E7OzBCQUMxQiw4REFBQ0QsNkRBQWVBO2dCQUFDTSxrQkFBa0JMLHFEQUFZLENBQUNLLGdCQUFnQjs7Ozs7OzBCQUNoRSw4REFBQ0osMERBQU1BOzs7OzswQkFDUCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub29yLXBvcnRmb2xpby8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVTY3JpcHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENvbG9yTW9kZVNjcmlwdCBpbml0aWFsQ29sb3JNb2RlPXt0aGVtZS5jb25maWcuaW5pdGlhbENvbG9yTW9kZX0gLz5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiQ29sb3JNb2RlU2NyaXB0IiwidGhlbWUiLCJOYXZiYXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxDb2xvck1vZGUiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst config = {\n    initialColorMode: \"light\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    styles: {\n        global: (props)=>({\n                body: {\n                    bg: props.colorMode === \"dark\" ? \"black\" : \"white\",\n                    color: props.colorMode === \"dark\" ? \"white\" : \"black\"\n                }\n            })\n    },\n    colors: {\n        brand: {\n            100: \"#f7fafc\",\n            900: \"#1a202c\"\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkQ7QUFFM0QsTUFBTUMsU0FBc0I7SUFDMUJDLGtCQUFrQjtJQUNsQkMsb0JBQW9CO0FBQ3RCO0FBRUEsTUFBTUMsUUFBUUosNkRBQVdBLENBQUM7SUFDeEJDO0lBQ0FJLFFBQVE7UUFDTkMsUUFBUSxDQUFDQyxRQUFnQjtnQkFDdkJDLE1BQU07b0JBQ0pDLElBQUlGLE1BQU1HLFNBQVMsS0FBSyxTQUFTLFVBQVU7b0JBQzNDQyxPQUFPSixNQUFNRyxTQUFTLEtBQUssU0FBUyxVQUFVO2dCQUNoRDtZQUNGO0lBQ0Y7SUFDQUUsUUFBUTtRQUNOQyxPQUFPO1lBQ0wsS0FBSztZQUNMLEtBQUs7UUFDUDtJQUNGO0FBQ0Y7QUFFQSxpRUFBZVQsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3ItcG9ydGZvbGlvLy4vc3JjL3RoZW1lL2luZGV4LnRzP2NjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIFRoZW1lQ29uZmlnIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuY29uc3QgY29uZmlnOiBUaGVtZUNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2xpZ2h0JyxcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcbn1cblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbmZpZyxcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiAocHJvcHM6IGFueSkgPT4gKHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6IHByb3BzLmNvbG9yTW9kZSA9PT0gJ2RhcmsnID8gJ2JsYWNrJyA6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvck1vZGUgPT09ICdkYXJrJyA/ICd3aGl0ZScgOiAnYmxhY2snLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgYnJhbmQ6IHtcbiAgICAgIDEwMDogJyNmN2ZhZmMnLFxuICAgICAgOTAwOiAnIzFhMjAyYycsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb2xvck1vZGUiLCJjb2xvciIsImNvbG9ycyIsImJyYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.ts\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();