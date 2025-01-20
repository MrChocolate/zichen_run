func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func findClosestNumber(nums []int) int {
	res := nums[0]
	dis := abs(nums[0])
	for _, num := range nums {
		if abs(num) < dis {
			dis = abs(num)
			res = num
		} else if abs(num) == dis {
			res = max(res, num)
		}
	}
	return res
}