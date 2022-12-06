// PART ONE
// bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
// nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
// nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
// zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11

// PART TWO
// mjqjpqmgbljsphdztnvjfqwrcgsmlb: first marker after character 19
// bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 23
// nppdvjthqldpwncqszvftbrmjlhg: first marker after character 23
// nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 29
// zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 26

const characters = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;

const isAllUniq = (chars) => {
    const set = new Set(chars);

    return set.size === chars.length;
}

// for the first part, count should be 4; for the second, count should be 14
const getLastUniqPosition = (str, count) => {
    let start = 0;

    while (start + count <= str.length) {
        const seq = str.slice(start, count + start);

        if (isAllUniq(seq)) {
            break;
        }

        start += 1;
    }

    return start + count;
}

console.log(getLastUniqPosition(characters, 14));
