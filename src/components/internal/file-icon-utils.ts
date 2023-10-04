import { fromHtml } from "hast-util-from-html";
import { getIcon } from "./file-tree-icons";

/** Convert an HTML string containing an SVG into a HAST element node. */
export const makeSVGIcon = (svgString: string) => {
    const root = fromHtml(svgString, { fragment: true });
    const svg = root.children[0] as Element;
    svg.properties = {
        ...svg.properties,
        width: 16,
        height: 16,
        class: 'tree-icon',
        'aria-hidden': 'true',
    };
    return svg;
};

export const FileIcon = (filename: string) => {
    const { svg } = getIcon(filename);
    return makeSVGIcon(svg);
};

export const FolderIcon = makeSVGIcon(
    '<svg viewBox="0 0 20 20"><path d="M14.77 6.45H9.8v-.47A.97.97 0 0 0 8.83 5H3.75v10H15.7V7.42a.91.91 0 0 0-.93-.97Z"/></svg>'
);

/** Make a text node with the pass string as its contents. */
export const Text = (value = ''): { type: 'text'; value: string } => ({
    type: 'text',
    value,
});