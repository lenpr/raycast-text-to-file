/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Root Directories - Comma or newline separated directories to search. */
  "roots": string,
  /** Allowed Extensions - Comma or newline separated extensions to allow (for example: .txt,.md,.markdown,.yaml,.yml, etc.). */
  "allowedExtensions": string,
  /** Search Excludes - Comma or newline separated names/patterns to ignore while searching (for example: .git,node_modules,archive/*). */
  "searchExcludes": string,
  /** Search Max Depth - Maximum depth under each root to search (0 = root only). */
  "searchMaxDepth": string,
  /** Separator Rule - How entries are separated when appending. */
  "separatorRule": "single-newline" | "blank-line" | "custom",
  /** Custom Separator - Used when separator rule is Custom. Supports \n and \t. */
  "customSeparator"?: string,
  /** Ensure Trailing Newline - Keep one newline at end of file after append. */
  "ensureTrailingNewline": boolean,
  /** Timestamp Format - Used by the Append with Timestamp action. */
  "timestampFormat": string,
  /** Default Insert Position - Where new text is inserted when appending. */
  "defaultInsertPosition": "end" | "beginning",
  /** Default Clipboard Offset - Default clipboard history item (0 = latest). */
  "defaultClipboardOffset": "0" | "1" | "2" | "3" | "4" | "5"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `append-clipboard-to-file` command */
  export type AppendClipboardToFile = ExtensionPreferences & {}
  /** Preferences accessible in the `append-text-to-file` command */
  export type AppendTextToFile = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-append-clipboard-to-last-appended-file` command */
  export type QuickAppendClipboardToLastAppendedFile = ExtensionPreferences & {}
  /** Preferences accessible in the `undo-last-append` command */
  export type UndoLastAppend = ExtensionPreferences & {}
  /** Preferences accessible in the `open-last-appended-file` command */
  export type OpenLastAppendedFile = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `append-clipboard-to-file` command */
  export type AppendClipboardToFile = {}
  /** Arguments passed to the `append-text-to-file` command */
  export type AppendTextToFile = {}
  /** Arguments passed to the `quick-append-clipboard-to-last-appended-file` command */
  export type QuickAppendClipboardToLastAppendedFile = {}
  /** Arguments passed to the `undo-last-append` command */
  export type UndoLastAppend = {}
  /** Arguments passed to the `open-last-appended-file` command */
  export type OpenLastAppendedFile = {}
}

