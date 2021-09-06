import { NodeEntry, Range, Text } from 'slate'

export const decorateWith: (search?: string) => (entry: NodeEntry) => Range[] =
  (search) =>
  ([node, path]) => {
    const ranges: Range[] = []

    if (search && Text.isText(node)) {
      const { text } = node
      const parts = text.split(search)
      let offset = 0

      parts.forEach((part, i) => {
        if (i !== 0) {
          ranges.push({
            anchor: { path, offset: offset - search.length },
            focus: { path, offset },
            highlight: '#ffeeba',
          })
        }

        offset = offset + part.length + search.length
      })
    }

    return ranges
  }
