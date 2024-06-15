import { createPortal } from "react-dom";

export const PoweredBy = ({ linkId }: { linkId: string }) => {
  return createPortal(
    <div className="absolute bottom-0 right-0 w-fit">
      <div className="p-6">
        <div className="relative z-20 flex items-center justify-end w-auto text-white bg-black rounded-md pointer-events-auto min-h-8 whitespace-nowrap ring-1 ring-white/40 hover:ring-white/90">
          <a
            href={`https://deck3.xyz?utm_campaign=poweredby&utm_medium=poweredby&utm_source=deck3-${linkId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm rounded-sm"
            style={{ paddingInlineStart: "12px", paddingInlineEnd: "12px" }}
          >
            Share docs via{" "}
            <span className="font-semibold tracking-tighter">Deck3</span>
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
};
