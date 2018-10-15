import Grid from 'oreo-ui/components/grid'
import GridItem from 'oreo-ui/components/grid-item'
import ActionSheet from 'oreo-ui/components/actionsheet'
import Badge from 'oreo-ui/components/badge'
import Button from 'oreo-ui/components/button'
import Cell from 'oreo-ui/components/cell'
import CellGroup from 'oreo-ui/components/cell-group'
import Dialog from 'oreo-ui/components/dialog'
import Flex from 'oreo-ui/components/flex'
import FlexItem from 'oreo-ui/components/flex-item'
import NumberKeyboard from 'oreo-ui/components/number-keyboard'
import Popup from 'oreo-ui/components/popup'
import Preloader from 'oreo-ui/components/preloader'
import Switch from 'oreo-ui/components/switch'
import Textarea from 'oreo-ui/components/textarea'
import Input from 'oreo-ui/components/input'
import Toast from 'oreo-ui/components/toast'
import Icon from 'oreo-ui/components/icon'
import Navbar from 'oreo-ui/components/navbar'
import PullToRefresh from 'oreo-ui/components/pull-to-refresh'
import InfiniteScroll from 'oreo-ui/components/infinite-scroll'

const version = '2.0.0'
const components = [
    Grid,
    GridItem,
    Input,
    ActionSheet,
    Badge,
    Button,
    Cell,
    CellGroup,
    Dialog,
    Flex,
    FlexItem,
    NumberKeyboard,
    Popup,
    Preloader,
    Switch,
    Textarea,
    Toast,
    Icon,
    Navbar,
    PullToRefresh,
    InfiniteScroll
]

const install = function (Vue, opts = {}) {
    components.forEach((item) => {
        Vue.use(item)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Grid,
    GridItem,
    ActionSheet,
    Badge,
    Button,
    Cell,
    CellGroup,
    Dialog,
    Flex,
    FlexItem,
    NumberKeyboard,
    Popup,
    Preloader,
    Switch,
    Textarea,
    Input,
    Toast,
    Icon,
    Navbar,
    PullToRefresh,
    InfiniteScroll
}
export default {
    install,
    version
}
