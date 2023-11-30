export const dataBlog = {
  posts: [
    {
      id: 1,
      author: "John Doe",
      comments: "0",
      content:
        "Proin ut ante vitae magna cursus porta. Aenean rutrum faucibus augue eu convallis. Phasellus condimentum elit id cursus sodales. Vivamus nec est consectetur, tincidunt augue at, tempor libero.",
      date: "2021-04-07",
      slug: "post-format-image-type",
      title: "Post Format Image Type",
      type: "image",
      blog_categories: [
        {
          Name: "News",
          slug: "news",
          pivot: { blog_id: "1", "blog-category_id": "1" },
        },
        {
          Name: "Model",
          slug: "model",
          pivot: { blog_id: "1", "blog-category_id": "2" },
        },
      ],
      video: null,
      picture: [
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_1_29b9758e1b.jpg",
          pivot: { related_id: "1", upload_file_id: "40" },
        },
      ],
      small_picture: [
        {
          width: "450",
          height: "230",
          url: "/uploads/post_1_450x230_e8ab17ad7f.jpg",
          pivot: { related_id: "1", upload_file_id: "41" },
        },
      ],
    },
    {
      id: 2,
      author: "John Doe",
      comments: "0",
      content:
        "uismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit.",
      date: "2021-04-13",
      slug: "post-format-image-gallery",
      title: "Post Format Image Gallery",
      type: "gallery",
      blog_categories: [
        {
          Name: "News",
          slug: "news",
          pivot: { blog_id: "2", "blog-category_id": "1" },
        },
        {
          Name: "Chat",
          slug: "chat",
          pivot: { blog_id: "2", "blog-category_id": "3" },
        },
      ],
      video: null,
      picture: [
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_3_674dffc858.jpg",
          pivot: { related_id: "2", upload_file_id: "44" },
        },
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_2_b5b34da229.jpg",
          pivot: { related_id: "2", upload_file_id: "42" },
        },
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_1_29b9758e1b.jpg",
          pivot: { related_id: "2", upload_file_id: "40" },
        },
      ],
      small_picture: [
        {
          width: "450",
          height: "230",
          url: "/uploads/post_2_450x230_0b7cc25c91.jpg",
          pivot: { related_id: "2", upload_file_id: "43" },
        },
        {
          width: "450",
          height: "230",
          url: "/uploads/post_3_450x230_827941d07c.jpg",
          pivot: { related_id: "2", upload_file_id: "45" },
        },
        {
          width: "450",
          height: "230",
          url: "/uploads/post_1_450x230_e8ab17ad7f.jpg",
          pivot: { related_id: "2", upload_file_id: "41" },
        },
      ],
    },
    {
      id: 3,
      author: "John Doe",
      comments: "0",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      date: "2021-01-07",
      slug: "hello-world",
      title: "Hello World!",
      type: "image",
      blog_categories: [
        {
          Name: "Fashion",
          slug: "fashion",
          pivot: { blog_id: "3", "blog-category_id": "4" },
        },
        {
          Name: "Model",
          slug: "model",
          pivot: { blog_id: "3", "blog-category_id": "2" },
        },
      ],
      video: null,
      picture: [
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_2_b5b34da229.jpg",
          pivot: { related_id: "3", upload_file_id: "42" },
        },
      ],
      small_picture: [
        {
          width: "450",
          height: "230",
          url: "/uploads/post_2_450x230_0b7cc25c91.jpg",
          pivot: { related_id: "3", upload_file_id: "43" },
        },
      ],
    },
    {
      id: 4,
      author: "John Doe",
      comments: "0",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      date: "2021-03-16",
      slug: "post-format-image",
      title: "Post Format Image",
      type: "image",
      blog_categories: [
        {
          Name: "Fashion",
          slug: "fashion",
          pivot: { blog_id: "4", "blog-category_id": "4" },
        },
        {
          Name: "Chat",
          slug: "chat",
          pivot: { blog_id: "4", "blog-category_id": "3" },
        },
      ],
      video: null,
      picture: [
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_3_674dffc858.jpg",
          pivot: { related_id: "4", upload_file_id: "44" },
        },
      ],
      small_picture: [
        {
          width: "450",
          height: "230",
          url: "/uploads/post_3_450x230_827941d07c.jpg",
          pivot: { related_id: "4", upload_file_id: "45" },
        },
      ],
    },
    {
      id: 5,
      author: "John Doe",
      comments: "0",
      content:
        "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages more recently with desktop publishing software like Aldus.",
      date: "2021-03-11",
      slug: "post-format-video",
      title: "Post Format Video",
      type: "video",
      blog_categories: [
        {
          Name: "Traveling",
          slug: "traveling",
          pivot: { blog_id: "5", "blog-category_id": "6" },
        },
        {
          Name: "Bag",
          slug: "bag",
          pivot: { blog_id: "5", "blog-category_id": "5" },
        },
      ],
      video: null,
      picture: [
        {
          width: "1280",
          height: "500",
          url: "/uploads/post_3_674dffc858.jpg",
          pivot: { related_id: "5", upload_file_id: "44" },
        },
      ],
      small_picture: [
        {
          width: "450",
          height: "230",
          url: "/uploads/post_3_450x230_827941d07c.jpg",
          pivot: { related_id: "5", upload_file_id: "45" },
        },
      ],
    },
  ],
  totalCount: 5,
  blogCategoryList: [
    { Name: "Bag", slug: "bag" },
    { Name: "Chat", slug: "chat" },
    { Name: "Design Trends", slug: "design-trends" },
    { Name: "Essentials", slug: "essentials" },
    { Name: "Fashion", slug: "fashion" },
    { Name: "Fresh Vegetables", slug: "fresh-vegetables" },
    { Name: "Model", slug: "model" },
    { Name: "News", slug: "news" },
    { Name: "Traveling", slug: "traveling" },
    { Name: "Uncategorized", slug: "uncategorized" },
  ],
  recentPosts: [],
};
