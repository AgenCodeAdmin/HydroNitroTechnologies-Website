
import { useEditor, EditorContent } from "@tiptap/react";
import Toolbar from "./Toolbar";
import { useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import FontFamily from '@tiptap/extension-font-family';
import Highlight from '@tiptap/extension-highlight';
import { Table } from '@tiptap/extension-table';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableRow } from '@tiptap/extension-table-row';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Youtube from '@tiptap/extension-youtube';


const RichTextEditor = ({ description, onChange }: { description: string, onChange: (richText: string) => void }) => {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Exclude the default image extension to use a custom one
        image: false,
        // Exclude the default link extension to use a custom one
        link: false,
        // Exclude the default heading extension to use a custom one
        heading: false,
        // Exclude the default bulletList extension to use a custom one
        bulletList: false,
        // Exclude the default orderedList extension to use a custom one
        orderedList: false,
        // Exclude the default blockquote extension to use a custom one
        blockquote: false,
        // Exclude the default codeBlock extension to use a custom one
        codeBlock: false,
        // Exclude the default horizontalRule extension to use a custom one
        horizontalRule: false,
        // Exclude the default history extension to use a custom one
        history: false,
        // Exclude the default dropcursor extension to use a custom one
        dropcursor: false,
        // Exclude the default gapcursor extension to use a custom one
        gapcursor: false,
        // Exclude the default strike extension to use a custom one
        strike: false,
        // Exclude the default underline extension to use a custom one
        underline: false,
        // Exclude the default bold extension to use a custom one
        bold: false,
        // Exclude the default italic extension to use a custom one
        italic: false,
        // Exclude the default code extension to use a custom one
        code: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
      }),
      Color,
      TextStyle,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Image.configure({
        inline: false, // Allow images to be block elements
        allowBase64: true,
      }),
      FontFamily,
      Highlight.configure({
        multicolor: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableCell,
      TableHeader,
      TableRow,
      Placeholder.configure({
        placeholder: 'Write something amazing...',
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
      Subscript,
      Superscript,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      Youtube.configure({
        controls: true, // Show YouTube controls
        width: '100%', // Make videos responsive
        height: 480, // Set a reasonable height
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && description !== editor.getHTML()) {
      editor.commands.setContent(description);
    }
  }, [description, editor]);

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
        <Toolbar editor={editor} content={description}/>
      <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
    </div>
  );
};

export default RichTextEditor;
