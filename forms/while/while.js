let wantToContinue = true
let i = 1
while(wantToContinue){
  console.log(`This loop is iteration ${i}.`)
  wantToContinue = confirm("Do you want to continue?")
  i++
}