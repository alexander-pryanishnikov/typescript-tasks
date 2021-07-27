
function main(): void {
    console.log('A')
    setTimeout(function exec() { // Уйдет в очередь, поэтому выполнится последним(не смотря на то, что у него 0 сек. задержки)
        console.log('B')
    }, 0)
    runWhileLoopForNSeconds(3)
    console.log('C')
}

main()

function runWhileLoopForNSeconds(sec: number): void {
    let start = Date.now(),
        now = start
    while (now - start < sec * 1000) { // Блокирует поток и проходит без очереди
        now = Date.now()
    }
}
