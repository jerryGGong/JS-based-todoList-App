const KEY = 'todos'

//로컬 스토리지 저장된 KEY값이로 get 없는 경우 공란 배열
export const loadData = () => {
    try{
        const stored = localStorage.getItem(KEY)
        return stored ? JSON.parse(stored): []
        //JSON.parse(localStorage.getItem(KEY)) || []
    }catch (e){
        return []
    }

}

// 로컬 스토리지 저장을 위함
export const saveData = (data) => {
    try{
        localStorage.setItem(KEY, JSON.stringify(data))
    }catch (e){
        //
    }
}
