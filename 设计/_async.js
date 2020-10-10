const getData = () => new Promise( resolve => setTimeout(() => {
    resolve('data');
}, 2000));
async function test () {
    const data = await getData();
    console.log("data:", data);
    const data2 = await getData();
    console.log("data2:", data2);
    return "success";
}
test().then( res => console.log(res));
