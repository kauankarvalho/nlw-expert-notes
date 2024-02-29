import * as Dialog from "@radix-ui/react-dialog"
import { ChangeEvent, useState } from "react"
import { X } from "lucide-react"


export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value === "") {
      setShouldShowOnboarding(true)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col gap-3 rounded-md bg-slate-700 p-5 text-left outline-none hover:ring-2 hover:ring-slate-500 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex items-center justify-center bg-black/50">
          <Dialog.Content className="relative flex h-[60vh] w-full max-w-[640px] flex-col overflow-hidden rounded-md bg-slate-700">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.Close>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button className="font-medium text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    className="font-medium text-lime-400 hover:underline"
                    onClick={handleStartEditor}
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  className="resize-node flex-1 bg-transparent text-sm leading-6 text-slate-400 outline-none"
                  autoFocus
                  onChange={handleContentChanged}
                />
              )}
            </div>

            <button
              type="button"
              className="w-full bg-lime-400 py-4 text-center text-sm font-semibold text-lime-950 outline-none hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
