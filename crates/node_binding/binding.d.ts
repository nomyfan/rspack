/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export interface OnLoadContext {
  id: string
}
export interface OnLoadResult {
  content?: string
  loader?: string
}
export interface OnResolveContext {
  importer?: string
  importee: string
}
export interface OnResolveResult {
  uri: string
  external: boolean
}
export interface RawOptions {
  entries: Record<string, string>
  minify?: boolean
  root?: string
  outdir?: string
  entryFilename?: string
  loader?: Record<string, string>
  inlineStyle?: boolean
  alias?: Record<string, string>
  refresh?: boolean
  sourceMap?: boolean
  codeSplitting?: boolean
  svgr?: boolean
  lazyCompilation?: boolean
  progress?: boolean
}
export function initCustomTraceSubscriber(): void
export interface PluginCallbacks {
  onloadCallback: (...args: any[]) => any
  onresolveCallback: (...args: any[]) => any
}
export function newRspack(optionJson: string, pluginCallbacks?: PluginCallbacks | undefined | null): ExternalObject<RspackInternal>
export function build(rspack: ExternalObject<RspackInternal>): object
export function rebuild(rspack: ExternalObject<RspackInternal>, changedFile: string): object
export interface ResolveRet {
  status: boolean
  result?: string
}
export function resolve(rspack: ExternalObject<RspackInternal>, id: string, dir: string): object
export function resolveFile(baseDir: string, importPath: string): string
export interface RspackInternal {
  
}
