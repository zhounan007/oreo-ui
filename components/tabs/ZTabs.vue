<script>
import ZTabBar from './ZTabBar'
import ZTabPane from './ZTabPane'

export default {
    name: 'z-tabs',
    components: {
        ZTabBar
    },
    data() {
        return {
            panes: [],
            currentName: this.value || this.activeName
        }
    },
    props: {
        pageSize: {
            type: Number,
            default: 5
        },
        animated: {
            type: Boolean,
            default: true
        },
        activeName: String,
        value: {},
        position: {
            type: String,
            default: 'top'
        }
    },
    computed: {
        activeContentStyle() {
            const style = {}
            let idx = 0
            this.panes.forEach((item, index) => {
                if (item.active) idx = index
            })
            let unit = (this.position === 'top' || this.position === 'bottom') ? 'X' : 'Y'
            let offset = -(idx * 100) + '%'
            const transform = `translate${unit}(${offset})`
            style.transform = transform
            style.webkitTransform = transform
            style.msTransform = transform
            return style
        }
    },
    mounted() {
        this.setupBars()
    },
    methods: {
        setCurrentName(v) {
            this.currentName = v
            this.$emit('input', v)
        },
        setupBars() {
            let _array = this.$slots.default

            _array.forEach((item, index) => {
                if (item.componentOptions && item.componentOptions.tag === ZTabPane.name) {
                    this.panes.push(item.componentInstance)
                }
            })
        },
        handlerTabClick(pane, name, ev) {
            this.setCurrentName(name)
            this.$emit('tab-click', pane, ev)
        }
    },
    created() {
        if (!this.activeName) {
            this.setCurrentName('0')
        }
    },

    render(h) {
        let {
            currentName,
            animated,
            position,
            panes,
            pageSize,
            handlerTabClick,
            activeContentStyle
        } = this

        let barsData = {
            props: {
                currentName,
                animated,
                panes,
                position,
                pageSize,
                onTabClick: handlerTabClick
            }
        }

        let barWrap = (<div class="oreo-tabs-bar-wrap">
            <z-tab-bar {...barsData}></z-tab-bar>
        </div>)

        let contentWrap = (<div class={{
            'oreo-tabs-content-wrap': true,
            'oreo-tabs-content-wrap-animated': animated
        }} style={activeContentStyle}
            ref="content">
            {this.$slots.default}
        </div>)

        let holder = [barWrap, contentWrap]
        if (!(position === 'top' || position === 'left')) {
            holder.reverse()
        }
        return (<div
            class={{
                'oreo-tab': true,
                [`oreo-tabs-${position}`]: true
            }}>
            {holder}
        </div >)
    }
}
</script>
