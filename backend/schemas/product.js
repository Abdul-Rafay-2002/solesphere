export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
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
}