import { Options } from "autoprefixer/lib/autoprefixer"
/**
 * CLI Options
 */
export interface IOptionProps {
    alias: Record<string, string>,
    autofix: Partial<Options>,
    base: string
}