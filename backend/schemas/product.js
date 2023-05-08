import { BiCategory, BiArchiveIn } from 'react-icons/bi';

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: BiArchiveIn,
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: {hotspot: true} }],
        },
        {
            name: 'productTitle',
            title: 'Product Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productTitle',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            },
        },
        {
            name: 'productNewPrice',
            title: 'Product New Price',
            type: 'string',
        },
        {
            name: 'productOldPrice',
            title: 'Product Old Price',
            type: 'string',
        },
        {
            name: 'productDescription',
            title: 'Product Description',
            type: 'string',
        },
        {
            name: 'productDiscount',
            title: 'Product Discount',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            icon: BiCategory,
            to: [{ type: 'category' }],
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ],
    preview: {
        select: {
            title: 'productTitle',
            subtitle: 'productDescription',
            media: 'images.0.assets'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: `${title}`,
                subtitle: `${subtitle}`,
                media: media,   
            };
        },
    },
}