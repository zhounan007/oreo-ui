<script>
import ZTabLine from './ZTabLine'
function noop() { }
export default {
    name: 'z-tab-bar',
    components: {
        ZTabLine
    },
    props: {
        position: String,
        animated: Boolean,
        panes: Array,
        currentName: String,
        pageSize: Number,
        onTabClick: {
            type: Function,
            default: noop
        }
    },
    methods: {
    },
    render(h) {
        let {
            animated,
            panes,
            pageSize,
            position,
            // activeBarStyle,
            onTabClick
        } = this
        let unit = (position === 'top' || position === 'bottom') ? 'width' : 'height'
        let size = panes.length > pageSize ? 100 / pageSize : 100 / (panes.length || 1)

        const bars = this._l(panes, (pane, index) => {
            let barName = pane.name || pane.index || index
            pane.index = `${index}`

            // const barContent = pane.$slots.label || pane.label
            const barContent = pane.label
            return <div
                class={{
                    'oreo-tabs-default-bar-tab': true,
                    'oreo-tabs-default-bar-tab-active': pane.active
                }}
                style={`${unit}:${size}%`}
                onClick={(ev) => { onTabClick(pane, barName, ev) }}

                ref="bar"
                refInFor
            >
                {barContent}
            </div>
        })

        return (<div class={{ 'oreo-tabs-default-bar': true, 'oreo-tabs-default-bar-animated': animated }}>
            <div class="oreo-tabs-default-bar-content">
                {bars}
                <z-tab-line panes={panes} position={position} pageSize={pageSize}></z-tab-line>
            </div>
        </div>)
    }
}
</script>
