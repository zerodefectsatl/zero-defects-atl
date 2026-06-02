import PPFLayerStack from '@/components/PPFLayerStack'

export default function PPFLayersPage() {
  return (
    <main
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background:
          'radial-gradient(900px 600px at 78% -8%, #16233a 0%, transparent 55%),' +
          'radial-gradient(700px 500px at 8% 108%, #1a2415 0%, transparent 55%),' +
          '#0b1018',
      }}
    >
      <PPFLayerStack />
    </main>
  )
}
