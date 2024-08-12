import Swal from "sweetalert2";


export function TypeAlert(
  message: string,
  type: "success" | "error" | "warning" | "info",
  email?: string
) {
  const isLargeEmail = (email?.length ?? 0) > 25;
  Swal.fire({
    toast: true,
    icon: `${type}`,
    title: `${message}`,
    position: "top",
    showConfirmButton: false,
    timer: 9000,
    customClass: {
      container: `custom-swal-container${isLargeEmail ? " large-email" : ""}`,
      timerProgressBar: "custom-progress-bar",
    },
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.classList.add(`icon-${type}`);
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
}
