import { Dialog } from '@headlessui/react';

export default function Modal({isOpen, setOpen, title, children}) {


function close(){
  setOpen(false)
}

  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-10">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <Dialog.Panel
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
          >
            <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
              {title}
            </Dialog.Title>
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
