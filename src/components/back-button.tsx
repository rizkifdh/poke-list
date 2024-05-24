import { TiArrowBack } from "react-icons/ti";

export function BackButton() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div class="pt-2">
      <button
        class="btn btn-circle text-4xl bg-secondary border-none"
        onClick={handleBack}
      >
        <span class="text-white">
          <TiArrowBack />
        </span>
      </button>
    </div>
  );
}
