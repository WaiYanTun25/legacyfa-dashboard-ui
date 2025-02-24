import { useTheme } from "@src/hooks";

export const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  modalProps: { title, message, confirmText, cancelText },
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  modalProps: {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
  };
}) => {
  const { theme } = useTheme();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 z-50 flex items-center justify-center">
      <div
        className={`p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 pointer-events-auto ${theme === "dark" ? "text-black bg-white" : "text-white bg-black"}`}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-message"
      >
        <h2 id="modal-title" className="text-lg font-bold mb-4">
          {title}
        </h2>

        <p id="modal-message" className="mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              onCancel();
              onCancel?.();
            }}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onConfirm?.();
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
