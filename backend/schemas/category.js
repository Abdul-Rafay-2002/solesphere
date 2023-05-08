import { BiCategory } from 'react-icons/bi'

export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: BiCategory,
    fields: [
        {
            name: 'categoryName',
            title: 'Category Name',
            type: 'string',
        },
    ],
}