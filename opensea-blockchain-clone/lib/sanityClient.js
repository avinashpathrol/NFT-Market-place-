import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'l3sudlug',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skd0m2WdlEH3YOGpqahNEFkIgRur8UEX3Nseb12870oqNwgK3Tg1RgJUnCr9uuXNX1FNv476e90aXa5E1zLNveXJHAsjbBMI4RAQxspkUs12bcoB3h9iT7qacbo5KRNdS35ZfEyjABWrBGtozmJZ9WvA77Aj8br9caLe10JZLxRXnqacltjr',
  useCdn: false,
})