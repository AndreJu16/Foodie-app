let testimonials = [
    {
        id: 'testimonial-1',
        name: 'Erick Jones',
        designation: 'Managing Director, USA',   
        description: 'Saat saya menjadi director saya mengalami obesitas yang begitu tinggi sehingga saya menjadi pribadi yang gendut untuk itu setelah saya mendengar Foodie saya langsung mencoba dan sangat cocok buat saya Terimakasih Foodie I love you Muaacchhh ',
        image: '/assets/testimonials/client-1.jpg',
    },
    {
        id: 'testimonial-2',
        name: 'Ben Smith',
        designation: 'Developer, USA',   
        description: 'Saat saya menjadi Developer saya mengalami obesitas yang begitu pesat sehingga saya menjadi pribadi yang buncit untuk itu setelah saya mendengar Foodie saya langsung mencoba dan sangat cocok buat saya Terimakasih Foodie ',
        image: '/assets/testimonials/client-2.jpg',
    },
    {
        id: 'testimonial-3',
        name: 'Ellen Harper',
        designation: 'Content Writer, USA',   
        description: 'Saat saya menjadi Developer saya mengalami obesitas yang begitu pesat sehingga saya menjadi pribadi yang buncit untuk itu setelah saya mendengar Foodie saya langsung mencoba dan sangat cocok buat saya Terimakasih Foodie ',
        image: '/assets/testimonials/client-3.jpg',
    },
    {
        id: 'testimonial-4',
        name: 'Jonathan Doe',
        designation: 'Designer, USA',   
        description: 'Saat saya menjadi Designer saya mengalami obesitas selama ini sehingga saya menjadi pribadi yang buncit untuk itu setelah saya mendengar Foodie saya langsung mencoba dan sangat cocok buat saya Terimakasih Foodie senang bisa bertemu ',
        image: '/assets/testimonials/client-4.jpg',
    },
    {
        id: 'testimonial-5',
        name: 'Emiley McArthur',
        designation: 'Business Owner, USA',   
        description: 'Saat saya menjadi Designer saya mengalami obesitas selama ini sehingga saya menjadi pribadi yang buncit untuk itu setelah saya mendengar Foodie saya langsung mencoba dan sangat cocok buat saya Terimakasih Foodie senang bisa bertemu ',
        image: '/assets/testimonials/client-5.jpg',
    }
];

function getAllTestimonials() {
    return testimonials;
}

// function getTestimonial(id) {
//     const foundedTestimonial = testimonials.find((testimonial) => testimonial.id === id);
//     return foundedTestimonial;
// }

function addTestimonials({ name, designation, description}) {
    testimonials = [...testimonials, {
        id: `testimonials-${+new Date()}`, name: name || '(noname)', designation, description
    }];
}

export {
    getAllTestimonials,
    addTestimonials
};