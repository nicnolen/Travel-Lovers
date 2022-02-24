const { Post } = require('../models');

const postData = [
    {
        topic: 'LIFESTYLE',
        title: 'TOP TEN RV BLOGS IN AMERICA',
        author: 'ALEX VOJACEK',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tellus ac odio facilisis, nec faucibus neque luctus. Nunc quis ultrices diam. Cras convallis, odio vel malesuada finibus, nisi mauris cursus felis, blandit luctus nunc nisi quis dui. Praesent sed ullamcorper felis, et auctor lorem. Maecenas dignissim, purus non convallis tempor, urna justo sagittis lacus, non scelerisque turpis urna condimentum tortor. Mauris ac nisi hendrerit massa ultricies molestie quis eu turpis. Vestibulum sit amet nulla nisi. Cras posuere iaculis odio ac tincidunt. Mauris nunc magna, congue ac nisi bibendum, pharetra ultrices urna. Nunc tristique vestibulum vestibulum. Sed eu ex vitae odio interdum mollis consequat at lectus. Aliquam erat volutpat.
             Pellentesque facilisis, odio vitae lacinia auctor, sapien turpis fermentum tellus, ut tincidunt massa velit maximus dolor. Sed feugiat scelerisque massa et vehicula. Nulla rutrum, ante et rhoncus sodales, enim urna maximus tellus, a sodales tortor lorem non mauris. Ut ullamcorper euismod est, sed rutrum neque feugiat in. Nunc nec leo ante. Nullam ipsum lacus, tempor ut porta eget, rutrum sed nulla. Aliquam rhoncus est eget erat ultricies dictum. Nullam suscipit eget justo tempus aliquam. Pellentesque eget elementum nunc.
             Curabitur lacinia facilisis maximus. Nullam sodales aliquam faucibus. Ut scelerisque metus a commodo consectetur. Curabitur ornare libero vitae rhoncus fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus velit, egestas porttitor euismod in, posuere sit amet ante. Sed eu finibus erat. Etiam massa purus, sodales eu erat non, facilisis tincidunt enim. Phasellus a commodo dolor, eu aliquam augue. Donec condimentum vehicula turpis, vel sodales quam finibus vel. Integer a sodales turpis, et malesuada velit. Praesent cursus tempor felis vestibulum sodales. Praesent at elit ullamcorper, auctor mi non, scelerisque tortor. Nam consectetur eros accumsan convallis interdum. Cras elit nisi, sodales vel condimentum id, viverra nec ipsum. Curabitur rhoncus sed mauris quis malesuada.
             Morbi lectus dui, sollicitudin volutpat justo id, pellentesque tincidunt nibh. Curabitur condimentum suscipit euismod. Duis lobortis velit non metus luctus aliquam. Proin scelerisque dapibus dignissim. Nullam at justo tellus. Phasellus scelerisque, velit ornare pulvinar facilisis, neque turpis fringilla urna, id pulvinar diam sapien eget mauris. Nunc fringilla elit lorem, non aliquam turpis pretium vel. Nullam vitae lorem id lacus faucibus luctus. Maecenas sit amet augue in turpis efficitur tempor.
             Etiam odio velit, pellentesque ut tellus ac, pharetra pulvinar augue. Phasellus mollis commodo sapien in pellentesque. Sed ipsum lectus, mollis sit amet consequat ac, interdum nec arcu. Pellentesque laoreet lobortis lobortis. Aenean nec pretium velit. Fusce vitae ligula bibendum, pharetra diam a, mattis libero. Aenean non dui orci. In iaculis leo eros, ut dapibus est fermentum in. Donec a aliquet odio. Suspendisse potenti. Cras viverra, nibh vitae lobortis euismod, ante felis auctor dolor, nec pretium sem justo nec enim. Nam tristique mollis urna, ac semper orci accumsan sed. Donec id ipsum augue. Donec consectetur, dui id aliquam dictum, enim purus mollis sem, ac euismod enim libero non magna. Etiam lectus justo, sagittis a justo vitae, pulvinar vehicula metus.`
        
    },
    {
        topic:'TRAVELING',
        title: 'LIVING ON THE ROAD',
        author: 'ALEX VOJACEK',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tellus ac odio facilisis, nec faucibus neque luctus. Nunc quis ultrices diam. Cras convallis, odio vel malesuada finibus, nisi mauris cursus felis, blandit luctus nunc nisi quis dui. Praesent sed ullamcorper felis, et auctor lorem. Maecenas dignissim, purus non convallis tempor, urna justo sagittis lacus, non scelerisque turpis urna condimentum tortor. Mauris ac nisi hendrerit massa ultricies molestie quis eu turpis. Vestibulum sit amet nulla nisi. Cras posuere iaculis odio ac tincidunt. Mauris nunc magna, congue ac nisi bibendum, pharetra ultrices urna. Nunc tristique vestibulum vestibulum. Sed eu ex vitae odio interdum mollis consequat at lectus. Aliquam erat volutpat.
        Pellentesque facilisis, odio vitae lacinia auctor, sapien turpis fermentum tellus, ut tincidunt massa velit maximus dolor. Sed feugiat scelerisque massa et vehicula. Nulla rutrum, ante et rhoncus sodales, enim urna maximus tellus, a sodales tortor lorem non mauris. Ut ullamcorper euismod est, sed rutrum neque feugiat in. Nunc nec leo ante. Nullam ipsum lacus, tempor ut porta eget, rutrum sed nulla. Aliquam rhoncus est eget erat ultricies dictum. Nullam suscipit eget justo tempus aliquam. Pellentesque eget elementum nunc.
        Curabitur lacinia facilisis maximus. Nullam sodales aliquam faucibus. Ut scelerisque metus a commodo consectetur. Curabitur ornare libero vitae rhoncus fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus velit, egestas porttitor euismod in, posuere sit amet ante. Sed eu finibus erat. Etiam massa purus, sodales eu erat non, facilisis tincidunt enim. Phasellus a commodo dolor, eu aliquam augue. Donec condimentum vehicula turpis, vel sodales quam finibus vel. Integer a sodales turpis, et malesuada velit. Praesent cursus tempor felis vestibulum sodales. Praesent at elit ullamcorper, auctor mi non, scelerisque tortor. Nam consectetur eros accumsan convallis interdum. Cras elit nisi, sodales vel condimentum id, viverra nec ipsum. Curabitur rhoncus sed mauris quis malesuada.
        Morbi lectus dui, sollicitudin volutpat justo id, pellentesque tincidunt nibh. Curabitur condimentum suscipit euismod. Duis lobortis velit non metus luctus aliquam. Proin scelerisque dapibus dignissim. Nullam at justo tellus. Phasellus scelerisque, velit ornare pulvinar facilisis, neque turpis fringilla urna, id pulvinar diam sapien eget mauris. Nunc fringilla elit lorem, non aliquam turpis pretium vel. Nullam vitae lorem id lacus faucibus luctus. Maecenas sit amet augue in turpis efficitur tempor.
        Etiam odio velit, pellentesque ut tellus ac, pharetra pulvinar augue. Phasellus mollis commodo sapien in pellentesque. Sed ipsum lectus, mollis sit amet consequat ac, interdum nec arcu. Pellentesque laoreet lobortis lobortis. Aenean nec pretium velit. Fusce vitae ligula bibendum, pharetra diam a, mattis libero. Aenean non dui orci. In iaculis leo eros, ut dapibus est fermentum in. Donec a aliquet odio. Suspendisse potenti. Cras viverra, nibh vitae lobortis euismod, ante felis auctor dolor, nec pretium sem justo nec enim. Nam tristique mollis urna, ac semper orci accumsan sed. Donec id ipsum augue. Donec consectetur, dui id aliquam dictum, enim purus mollis sem, ac euismod enim libero non magna. Etiam lectus justo, sagittis a justo vitae, pulvinar vehicula metus.`
    },
    {
        topic: 'BUCKETLIST',
        title: 'SWIM IN THE MAJOR OCEANS AND SEAS',
        author: 'ALEX VOJACEK',
        body: ` - Atlantic Ocean
        - Pacific Ocean
        - Indian Ocean
        - Arctic Ocean
        - Mediterranean Sea
        - The Dead Sea
        - The Red Sea`
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;