import Grid from '@c/grid'
import GridItem from '@c/grid-item'
import ActionSheet from '@c/actionsheet'
import Badge from '@c/badge'
import Button from '@c/button'
import Cell from '@c/cell'
import CellGroup from '@c/cell-group'
import Dialog from '@c/dialog'
import Flex from '@c/flex'
import FlexItem from '@c/flex-item'
import NumberKeyboard from '@c/number-keyboard'
import Popup from '@c/popup'
import Preloader from '@c/preloader'
import Switch from '@c/switch'
import Textarea from '@c/textarea'
import Input from '@c/input'
import Toast from '@c/toast'
import Icon from '@c/icon'
import Navbar from '@c/navbar'
import PullToRefresh from '@c/pull-to-refresh'
import InfiniteScroll from '@c/infinite-scroll'

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
