import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Illustration: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  return (
    <div class={`illustration ${displayClass ?? ""}`}>
      <img src="/static/illustration.png" alt="Illustration" />
    </div>
  )
}

Illustration.css = `
.illustration {
  margin: 2rem 0;
  text-align: center;
}
`

export default (() => Illustration) satisfies QuartzComponentConstructor
