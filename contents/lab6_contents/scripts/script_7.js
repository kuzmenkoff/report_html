function task7Execute() {
    // 1
    const categories = document.querySelectorAll('#categories .item');
    console.log("Number of categories:", categories.length);

    //2
    categories.forEach(category => {
        const title = category.querySelector('h4').textContent;
        const itemCount = category.querySelectorAll('ul li').length;
        console.log("Category:", title);
        console.log("Elements:", itemCount);
      });
}
