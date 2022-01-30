type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom' //template literals will show on suggest, wow

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export default function Toast({ position }: ToastProps) {
  return <div>Toast Notification Position - {position}</div>
}
