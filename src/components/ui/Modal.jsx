import { Dialog } from '@headlessui/react';

export default function Modal({isOpen, setOpen}) {


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
              Payment successful
            </Dialog.Title>
            <p className="mt-2 text-sm text-gray-500">
              Your payment has been successfully submitted.
            </p>
            <div className="mt-4">
              <button
                onClick={close}
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Got it, thanks!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
