import { t } from 'oreo-ui/components/locale'

export default {
    methods: {
        t(...args) {
            return t.apply(this, args)
        }
    }
}
