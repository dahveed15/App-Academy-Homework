def n_squared_time(arr)

  arr.each_with_index do |fish1, i|
    max_length = true
    arr.each_with_index do |fish2, j|
      next if i == j
      if fish1.length < fish2.length
        max_length = false
      end
    end
    return fish1 if max_length
  end

end

#n log n
class Array

  def merge_sort(&prc)
    return self if self.length < 2

    prc ||= Proc.new { |num1, num2| num1 <=> num2 }

    mid = self.length / 2

    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    arr = []

    until left.empty? || right.empty?
      case prc.call(left[0].length, right[0].length)
      when -1
        arr << left.shift
      when 0
        arr << left.shift
      when 1
        arr << right.shift
      end
    end

    arr.concat(left).concat(right)
  end
end

def nlogn_biggest_fish(fishes)
  # sort the array longest to shortest
  prc = Proc.new { |x, y| y.length <=> x.length }
  #return the first element
  fishes.merge_sort(&prc)[0]
end


def n_time(arr)
  biggest_fish = arr[0]

  arr.each_index do |i|
    break if i == arr.length - 1
    if arr[i].length < arr[i + 1].length
      if biggest_fish.length < arr[i + 1].length
        biggest_fish = arr[i + 1]
      end
    end
  end

  biggest_fish
end

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, i|
    return i if tile == direction
  end
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
