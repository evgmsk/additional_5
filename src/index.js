module.exports = function check(str, bracketsConfig) {
    const _str = str.replace(/\s/g, '');
    let to_close = [];
    const checkBrackets = (i = 0, j = 0) => {
        let fit = false;
        if(bracketsConfig[j][1] ===  bracketsConfig[j][0]){
            if(_str[i] === bracketsConfig[j][0]){
                fit = true;
                if(!to_close.includes(_str[i])){
                    to_close.push(bracketsConfig[j][1])
                }else{
                    if(to_close.pop() !== _str[i]){
                        return false
                    }
                }
            }
        }else{
            if(_str[i] === bracketsConfig[j][0]){
                fit = true;
                to_close.push(bracketsConfig[j][1])
            }
            if(_str[i] === bracketsConfig[j][1]){
                fit = true;
                if(to_close.pop() !== _str[i]){
                    to_close.push(false);
                    return false
                }
            }
        }
        return (!fit && j < bracketsConfig.length - 1)?
            checkBrackets(i, j + 1):
            (i < _str.length - 1)?
                checkBrackets(i + 1, 0): true
    };
    checkBrackets();
    return to_close.length < 1
};
