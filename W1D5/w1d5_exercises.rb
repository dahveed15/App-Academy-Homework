class Stack
  attr_reader :stack

  def initialize
    # create ivar to store stack here!
    @stack = []
  end

  def add(el)
    # adds an element to the stack
    stack.push(el)
  end

  def remove
    # removes one element from the stack
    stack.pop
  end

  def show
    # return a copy of the stack
    stack.dup
  end
end

class Queue

  attr_reader :queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    queue.push(el)
  end

  def dequeue
    queue.shift
  end

  def show
    queue.dup
  end

end

class Map

  attr_reader :map

  def initialize
    @map = []
  end

  def assign(key, value)
    map.each do |arr|
      if arr[0] == key
        arr[1] = value
        return map
      end
    end

    map.push([key, value])
  end

  def lookup(key)
    map.each { |pair| return pair[1] if pair[0] == key }
    nil
  end

  def remove(key)
    map.reject! { |arr| arr[0] == key }
  end

  def show
    map.dup
  end

end
