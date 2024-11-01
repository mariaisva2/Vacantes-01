import { DetailedHTMLProps, LabelHTMLAttributes, forwardRef } from 'react'

export type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (props, ref) => {
    return (
      <label
        {...props}
        ref={ref}
        className="text-sm"
      />
    )
  } 
)

Label.displayName = 'Label'

export default Label
